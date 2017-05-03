<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
  <%@include file="/head.html" %>
  <script type="text/javascript" src="/js/jquery-1.4.2.js"></script>
  	<script type="text/javascript">
  		function checkData(){
  			var price = document.getElementsByName("price")[0].value;
  			if(isNaN(price)){
  				alert("单价必须是数字!");
  				document.getElementsByName("price")[0].value = "";
  				return false;
  			}else if(price<=0){
	  			alert("单价必须大于0!");
	  			document.getElementsByName("price")[0].value = "";
	  			return false;
  			}else{
  				return true;
  			}
  		}
  		
  		function subFunc(){
  			$("#bar1").css("display","block");
			 window.setInterval(ref, 10);
  		}
  		function ref(){
	  			$.post("/UploadMsgServlet",function(data){
	  				if(data!=null){
		  				var json = eval("("+data+")");
		  				$("#bar2").css("width",json.per+"%");
		  				$("#msg_div").html("<font size='1'>实时速度:"+json.speed+"KB/S,大致剩余时间:"+json.ltime+"S</font>");
	  				}
	  			});
  			}
  	</script>
  </head>
  <body style="text-align: center;">
  <%@include file="/header.html" %>

  
  <div id="content" class="width_setter group" role="main">
  
  <%@include file="/nav1.html" %>
  <div class="manage-account-container clearfix">

  	<form action="${pageContext.request.contextPath}/AddprodServlet" method="POST" enctype="multipart/form-data" onsubmit="return checkData()"  style="margin:100px">
  		<table border="1">
  			<tr>
  				<td>商品名称</td>
  				<td><input type="text" name="name"/></td>
  			</tr>
  			<tr>
  				<td>单价</td>
  				<td><input type="text" name="price"/></td>
  			</tr>
  			<tr>
  				<td>商品种类</td>
  				<td>
					<select name="category">
						<option value="电子数码">电子数码</option>
						<option value="图书杂志">图书杂志</option>
						<option value="钟表首饰">钟表首饰</option>
						<option value="进口美食">进口美食</option>
						<option value="大型家电">大型家电</option>
						<option value="男女服装">男女服装</option>
					</select>
				</td>
  			</tr>
  			
  			<tr>
  				<td>免税商品</td>
  				<td>
  				<input type="text" name="taxFree"/>
  				</td>
  			</tr>
  			
  			<tr>
  				<td>库存数量</td>
  				<td><input type="text" name="pnum"/></td>
  			</tr>
  			<tr>
  				<td>商品图片</td>
  				<td><input type="file" name="file1"/>
  				<div id="bar1" style="width: 200px;height: 20px; border: 1px solid green;; display:none;">
  					<div id="bar2" style="width: 0% ;height: 20px;background-color: green"/>
				</div>
				<div id="msg_div"></div>
  				</td>
  			</tr>
  			<tr>
  				<td>描述信息</td>
  				<td><textarea name="description" rows="6" cols="40"></textarea></td>
  			</tr>
  			<tr>
  				<td colspan="2"><input type="submit" value="添加商品" onclick="subFunc()"></td>
  			</tr>
  		</table>
  	</form>
  		</div>		
  	</div>			
  	
  <%@include file="/footer.html" %>
  </body>
</html>
