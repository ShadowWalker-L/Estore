<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
 <head> 
<%@include file="/head.html" %>
 </head> 
 <body> 
 <%@include file="/header.html" %>

  
  <div id="content" class="width_setter group" role="main">
  

  <%@include file="/nav0.html" %>

  
  <head>
        <title>Contact Us</title>
    </head>
    
    <div id="contactus">
        <h3>Leave Us A Message</h3>
        
        <div class="clearfix">
	<form id="contactUsForm" method="post" action="mailto:160109794@qq.com">
	  <div class="form50">
	    <label for="subject">主题</label> <input type="text" name="subject" class="field50" />
	  </div>
	  <div class="form50">
	    <label for="body">What should we know?</label> <input type="text" name="body" class="field50"></input>
	  </div>
	  <div class="login_register">
	    <input class="submit big red" type="submit" value="Submit" />
	  </div>
	</form>
  </div>
  </div>
  </div>
   <%@include file="/footer.html" %>
  </body>
  </html>