<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <%@include file="/head.html" %>
  </head>
  <body>
  <%@include file="/header.html" %>
   <div id="content" class="width_setter group" role="main">
 
   <%@include file="/nav1.html" %>
    <div class="manage-account-container clearfix" style="margin-right:60px">
  	<h1>Account  List</h1><hr>
  	<table width="100%" border = "1" style="text-align: center;" >
  	<tr>
  		<th>用户名</th>
  		<th>昵称</th>
  		<th>邮箱</th>
  		<th>角色</th>
  	</tr>
  	<c:forEach items="${requestScope.list}" var="user">	
  		<tr>
  			<td>${user.username }</td>
  			<td>${user.nickname }</td>
  			<td>${user.email }</td>
  			<td>${user.role }</td>	
  		</tr>
		<tr>
			<td colspan="4"></td>
		</tr>
  	</c:forEach>
  	</table>
  	
  	</div>
  	</div>
  	
  	<%@include file="/footer.html" %>
  </body>
</html>
