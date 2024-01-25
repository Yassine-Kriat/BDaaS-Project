package com.mycode.bigdata.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("/api/upload")
public class FileUploadController {

    @PostMapping("/files")
    public String uploadFiles(@RequestParam("txtFile") MultipartFile txtFile,
                              @RequestParam("jarFile") MultipartFile jarFile) {
        try {
            // Define the target directory where you want to save the files
            String uploadDirectory = "/home/yasskt/Downloads/work/sujet-tp-scale/uploads/";

            // Save the uploaded files to the target directory
            Path txtFilePath = Path.of(uploadDirectory, txtFile.getOriginalFilename());
            Path jarFilePath = Path.of(uploadDirectory, jarFile.getOriginalFilename());

            Files.copy(txtFile.getInputStream(), txtFilePath, StandardCopyOption.REPLACE_EXISTING);
            Files.copy(jarFile.getInputStream(), jarFilePath, StandardCopyOption.REPLACE_EXISTING);

            // Return a success message
            return "Files uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "File upload failed: " + e.getMessage();
        }
    }
}
