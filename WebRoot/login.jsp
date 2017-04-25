<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  <body>
  <div align="center">
  	<h1>Estore登录</h1><hr>
  	<font color="red">${msg }</font>
  	<form action="/LoginServlet" method="POST">
  		<table>
  			<tr>
  				<td>用户名:</td>
  				<td><input type="text" name="username" value="" /></td>
  			</tr>
  			<tr>
  				<td>密码:</td>
  				<td><input type="password" name="password" /></td>
  			</tr>		
  			<tr>
  				<td colspan="2"><input type="submit" value="登录" /></td>
  			</tr>
  		</table>
  	</form>
  </div>
  </body>
</html>
  