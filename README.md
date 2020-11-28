# spring-mvc-thymeleaf
Spring Boot app with Spring MVC, with Thymeleaf engine for views.  
Uses materializecss and React through webjar-dependency.
JS-scripts are transpiled with babel-maven-plugin, which uses babel webjar as babel source.

Secured by Spring Security form login.  
Spring Data JDBC for data access.  
Flyway for db-migrations.

## Transpiling JS when app is running
Run command:
```
mvn babel:babel@js-transpile
```

To have it run automatically when changes to JS-files are "compiled" in Intellij,
run the script `run-auto-transpile` in the terminal.