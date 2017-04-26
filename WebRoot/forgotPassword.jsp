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
  
  <c:if test="${sessionScope.user!=null} }">
  <%@include file="/nav0.html" %>
  </c:if>
  
   <div id="account">

   <title>Forgot Password</title>

   <div id="forgotPassword">
        <h3>Forgot Password</h3>
        <p>Enter your email address to retrieve your password.</p>  
        
        
                    
        <form id="forgotPasswordForm" method="post" class="clearfix" action="/login/forgotPassword">
            <div class="form50">
                <label for="emailAddress">Email</label>
                <input type="email" name="emailAddress" class="field50" />
            </div>
            <div class="login_register">
                <input class="reset_password_button big red" type="submit" value="Get Password" />
            </div>
            <div class="login_register_alt_links">
                <a class="account" href="${pageContext.request.contextPath}/login.jsp">Login</a> 
                <br />
                <a class="account" href="${pageContext.request.contextPath}/regist.jsp">Register</a>
            </div>
        <</form>
    </div>
   </div> 
   
   </div>
   
   </div>

   <%@include file="/footer.html" %>
 </body>
</html>