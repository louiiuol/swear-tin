package dev.louiiuol.jarit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Root concrete class providing spring boot main method
 * 
 * @see SpringBootApplication
 * @see EnableSwagger2
 * @author louiiuol
 */
@SpringBootApplication(scanBasePackages = "dev.louiiuol")
@EnableSwagger2
public class JarItApplication extends SpringBootServletInitializer { 

	public static void main(String[] args) {
		SpringApplication.run(JarItApplication.class, args);
	}

}