package com.mycode.bigdata.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;

@RestController
@RequestMapping("/api/script")
public class ScriptController {

    @PostMapping("/execute")
    public String executeScript(
            @RequestParam("codeFileName") String codeFileName,
            @RequestParam("dataFileName") String dataFileName
    ) {
        try {
            // Path to the execute_analysis.sh script
            String scriptPath = "/home/yasskt/Downloads/work/sujet-tp-scale/uploads/script.sh";

            // Execute the script with codeFileName and dataFileName as arguments
            Process process = Runtime.getRuntime().exec("bash " + scriptPath + " " + codeFileName + " " + dataFileName);

            // Read the output of the script in real-time
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            StringWriter outputWriter = new StringWriter();

            // Create separate threads to read and print the output and error streams
            Thread outputThread = new Thread(() -> {
                try {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        outputWriter.append(line).append("\n");
                        System.out.println("Script Output: " + line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            Thread errorThread = new Thread(() -> {
                try {
                    String line;
                    while ((line = errorReader.readLine()) != null) {
                        outputWriter.append(line).append("\n");
                        System.err.println("Script Error: " + line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            // Start the threads to read the streams concurrently
            outputThread.start();
            errorThread.start();

            // Wait for the script to complete
            int exitCode = process.waitFor();

            // Join the output and error threads to ensure they finish printing
            outputThread.join();
            errorThread.join();

            if (exitCode == 0) {
                String scriptOutput = outputWriter.toString();
                return "Script executed successfully. Output:\n" + scriptOutput;
            } else {
                return "Script execution failed with exit code " + exitCode;
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return "Error executing the script: " + e.getMessage();
        }
    }
}
