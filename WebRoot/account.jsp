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
   <div class="manage-account-container clearfix">
    <h1>Account Options</h1>
    <ul id="account-menu">
    <li><a href="#">Account Information</a></li>
    <li><a href="#">View Orders</a></li>
    <li><a href="#">Change Password</a></li>
    <li><a href="#">Manage Addresses</a></li>
    <li><a href="#">Manage Wishlist</a></li>
    <li><a href="#">Contact Us</a></li>
</ul>
  <div class="manage-account-form-wrapper">
     <h2>Update Account Information</h2>
            <form class="manage-account" action="#" method="POST" style="width: 400px;">
            <div class="form100">
                <label for="emailAddress">Email Address:</label>
                
                <input type="email" name="emailAddress" id="emailAddress" class="field50" value="${sessionScope.user.email}" />
            </div>
            <div class="form100">
                <label for="firstName">User Name:</label>
                
                <input type="text" name="firstName" id="firstName" class="field50" value="${sessionScope.user.username}" />
            </div>
            <div class="form100">
                <label for="lastName">Nick Name:</label>
                
                <input type="text" name="lastName" id="lastName" class="field50" value="${sessionScope.user.nickname}" />
            </div>
            <input type="submit" class="medium red" value="Submit" />
       </form>
    </div>
   
   
   
    
  </div>
 </div>
 </div>
   <%@include file="/footer.html" %>
 </body>
</html>
