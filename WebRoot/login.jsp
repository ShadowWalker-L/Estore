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
  
   <div id="account"> 

   <title>Login</title>

   <div id="login">
   
    <h3> <span> 登录账户 </span> </h3> 
    <p><span> 已经是会员，使用下面的表单登陆 </span></p> 
    <font color="red">${msg }</font>
    <div class="clearfix"> 

    <form id="registrationForm" class="clearfix" action="${pageContext.request.contextPath }/account/LoginServlet" method="post"> 
   

     	
     	
      <div class="form50 " >
       <label for="username"><span>用户名</span></label> 
       <input type="text" name="username" value="" class="field50"/> 
       </div>


     
      <div class="form50 "> 
       <label for="password"><span>密码</span></label> 
       <input type="password" name="password" class="field50"/>      
      </div> 
    
      
      
      <div class="form50 " > 
       <input type="checkbox" name="remname" value="true" <c:if test="${cookie.remname != null }" >
       checked = 'checked'  </c:if> 
       />
       <span>记住用户名</span> 
       <input type="checkbox" name="autologin" value="true" />
       <span>30天内自动登陆</span> 
      </div> 

    
     
    
      <div class="login_register" > 
       <input class="login_button big red" type="submit" value="登录" /> 
      </div> 
      
      <div class="login_register_alt_links">
              <a class="account" href="${pageContext.request.contextPath}/regist.jsp"><span>Register</span></a>
              <br/>
              <a class="account" href="${pageContext.request.contextPath}/forgotPassword.jsp"><span>Forgot Password</span></a>
      </div>
      

      
     </form> 
  
    </div> 
   </div> 
   
   </div>
   
   </div>

   <%@include file="/footer.html" %>
 </body>
</html>