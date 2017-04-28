<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <script type="text/javascript" src="/js/jquery-1.4.2.js"></script>
  	<script type="text/javascript">
  		function checkData(){
  			var price = document.getElementsByName("price")[0].value;
  			if(isNaN(price)){
  				alert("单价必须是数字!");
  				document.getElementsByName("price")[0].value = "";
  				return false;
  			}else if(price<=0){
	  			alert("单价必须大于0!")
	  			document.getElementsByName("price")[0].value = "";
	  			return false;
  			}else{
  				return true;
  			}
  		}
  	</script>
  </head>
  <body style="text-align: center;">
  	<h1>Estore_修改商品</h1><hr>
  	<form action="${pageContext.request.contextPath}/UpdateProdServlet?id=${prod.id} " method="POST" onsubmit="return checkData()">
  		<table width="100%" border="1">
  			<tr>
  				<td>商品图片</td>
  				<td><img src="${pageContext.request.contextPath}/ImgServlet?imgurl=${prod.imgurls} "/></td>
  			</tr>
  			<tr>
  				<td>商品名称</td>
  				<td>${prod.name }</td>
  			</tr>
  			<tr>
  				<td>单价</td>
  				<td><input type="text" name="price" value = "${prod.price }"/></td>
  			</tr>
  			<tr>
  				<td>商品种类</td>
  				<td>
					${prod.category }
				</td>
  			</tr>
  			<tr>
  				<td>库存数量</td>
  				<td><input type="text" name="pnum" value = "${prod.pnum }"/></td>
  			</tr>
  			<tr>
  				<td colspan="2"><input type="submit" value="确认修改"></td>
  			</tr>
  		</table>
  	</form>
  				
  </body>
</html>
