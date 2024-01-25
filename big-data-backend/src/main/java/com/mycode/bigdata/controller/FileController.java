package com.mycode.bigdata.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;

@RestController
@RequestMapping("/api/files")
public class FileController {

    private final String fileDirectory = "/home/yasskt/Downloads/work/sujet-tp-scale/uploads/";

    @GetMapping("/output")
    public ResponseEntity<Resource> downloadOutputFile() throws MalformedURLException {
        Path filePath = Paths.get(fileDirectory, "output.txt");
        Resource resource = new UrlResource(filePath.toUri());

        if (resource.exists()) {
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=output.txt");
            return ResponseEntity.ok()
                    .headers(headers)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/output/content")
    public ResponseEntity<List<String>> getOutputFileContent() throws IOException {
        Path filePath = Paths.get(fileDirectory, "output.txt");

        if (Files.exists(filePath)) {
            List<String> lines = Files.readAllLines(filePath);
            return ResponseEntity.ok(lines);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
