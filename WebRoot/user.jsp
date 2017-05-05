<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
 <head> 
<%@include file="/head.html" %>
<link rel="stylesheet"  href="css/rotation.css"/>
 </head> 
 
 
 <body> 
 
<%@include file="/header.html" %>

  
  <div id="content" class="width_setter group" role="main">
  


  <%@include file="/nav0.html" %>
  <div class="manage-account-container clearfix">



  
   <div id="account"> 

   
   <div class="rotation">
			<a href = "">
				<img alt="示例图片1" title="示例图片1" src="img/jingdong/jingdong1.jpg">
			</a>
			<a href = "">
				<img alt="示例图片2" title="示例图片2" src="img/jingdong/jingdong2.jpg">
			</a>
			<a href = "">
				<img alt="示例图片3" title="示例图片3" src="img/jingdong/jingdong3.jpg">
			</a>
			<a href = "">
				<img alt="示例图片4" title="示例图片4" src="img/jingdong/jingdong4.jpg">
			</a>
			<ul>
				<li class = "selected">1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
   
   
   
   


   </div>
   </div>

   <%@include file="/footer.html" %>
   <script src="js/rotation.js"></script>
 </body>
</html>