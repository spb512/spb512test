<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Add User</title>
</head>
<body>
    <form action="add" method="post">
        
        Name:<input id="name" name="name" type="text" />
        <br>
        Nice Name:<input id="nice_name" name="nice_name" type="text" />
        <br>
        Age:<input id="age" name="age" type="text" />
        <br>
        <input type="submit" value="提交">
    </form>
</body>
</html>