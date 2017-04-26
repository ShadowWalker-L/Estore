<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <%@include file="/head.html" %>
  <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
  	<script type="text/javascript">
  		function changeImg(img){
  			img.src = img.src+"?time="+new Date().getTime();
  		}
  		function checkForm(){
  			var canSub = true;
  			//1.非空校验
  			canSub = checkNull("username","用户名不能为空!") && canSub;
  			canSub = checkNull("password","密码不能为空!") && canSub;
  			canSub = checkNull("password2","确认密码不能为空!") && canSub;
  			canSub = checkNull("nickname","昵称不能为空!") && canSub;
  			canSub = checkNull("email","邮箱不能为空!") && canSub;
  			canSub = checkNull("valistr","验证码不能为空!") && canSub;
  			
  			//2.两次密码一致的校验
  			var psw1 = document.getElementsByName("password")[0].value;
  			var psw2 = document.getElementsByName("password2")[0].value;
  			if(psw1 != psw2){
  				document.getElementById("password2_msg").innerHTML = "<font color='red'>两次密码不一致!</font>";
  				canSub = false;
  			}
  			
  			//3.邮箱格式校验:sssss@xxx.xxx.xxx.xxx 
			var email = document.getElementsByName("email")[0].value;
			if( email!= null && email != "" && !/^\w+@\w+(\.\w+)+$/.test(email)){
				document.getElementById("email_msg").innerHTML = "<font color='red'>邮箱格式不正确!</font>";
  				canSub = false;
			}
  			
  			return canSub;
  		
  		}
  		function checkNull(name,msg){
  			document.getElementById(name+"_msg").innerHTML = "";
  			var objValue = document.getElementsByName(name)[0].value;
  			if(objValue == null || objValue == ""){
				document.getElementById(name+"_msg").innerHTML = "<font color='red'>"+msg+"</font>";
  				return false;
  			}
  			return true;
  		}
  	</script>
  </head>
  
  <body class="locale-en_US">
  <%@include file="/header.html" %>
  
   <div id="content" class="width_setter group" role="main">
  
  <c:if test="${sessionScope.user!=null} }">
  <%@include file="/nav0.html" %>
  </c:if>
  
  <div id="account">
  <title>Register</title>
  
  <div id="register">
  
  	<h3><span>注册账户</span></h3><hr>
  	<p><span>还没有帐户？ 现在注册一个，以获得相应权限</span>.</p>
  	<form id="registerForm" class="clearfix" action="${pageContext.request.contextPath}/RegistServlet" method="POST" onsubmit="return checkForm()">
  		
  			<div class="form50">
  				<label for="username"><span>用户名:</span></label>
  				<input type="text" name="username" class="field50" value="${param.username }"/>
  				<p id="username_msg" style="border:none"></p>
  			</div>
  			
  			<div class="form50">
  				<label for="password"><span>密码:</span></label>
  				<input type="password" name="password" id="password" class="field50"/>
  				<p id="password_msg" style="border:none"></p>
  			</div>
  			
  			<div class="form50">
  				<lable for="password2"><span>确认密码:</span></label>
  				<input type="password" name="password2" id="passwordConfirm" class="field50"/>
  				<p id="password2_msg" style="border:none"></p>
  			</div>
  			
  			<div class="form50">
  				<label for="nickname"><span>昵称:</span></label>
  				<input type="text" name="nickname"  class="field50" value="${param.nickname }"/>
  				<p id="nickname_msg" style="border:none"></p>
  			</div>
  			
  			<div class="form50">
  				<label for="email">邮箱:</label>
  				<input type="text" name="email" class="field50" value="${param.email }"/>
  				<p id="email_msg" style="border:none"></p>
  			</div>
  			
  			<div class="form50">
  				<label for="valistr">验证码:</label>
  				<input type="text" name="valistr" class="field50"/>
  				<img src="${pageContext.request.contextPath}/ValiImg" onclick="changeImg(this)" style="cursor: pointer;"/>
  				<p id="valistr_msg">${msg }</p>
  			</div>
  			
  			<div class="login_register">
  				<input  class="login_button big red" type="submit" value="注册用户"/>
  			</div>
  			
  			  <div class="login_register_alt_links">
              <a class="account" href="${pageContext.request.contextPath}/login.jsp"><span>Login</span></a>
              <br/>
              <a class="account" href="${pageContext.request.contextPath}/forgotPassword.jsp"><span>Forgot Password</span></a>
      </div>
      
  
  
  	</form>

  	</div>

  	</div>
  	
      </div>
  	  <%@include file="/footer.html" %>
  </body>
</html>
