<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
 <head> 
 
<%@include file="/head.html" %>
 <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
 
  <script type="text/javascript">
window.onload=function(){
var str = decodeURI('${cookie.remname.value}');
document.getElementsByName("username")[0].value = str;
console.log(str);
}
</script> 

 </head> 
 <body> 
 <%@include file="/header.html" %>

  
  <div id="content" class="width_setter group" role="main">
  
  <c:if test="${sessionScope.user!=null} }">
  <%@include file="/nav0.html" %>
  </c:if>
  
   <div id="account" style="margin-top:30px;width:400px;height:325px"> 

   
   </div>

   <%@include file="/footer.html" %>
 </body>
</html>
