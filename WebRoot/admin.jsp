<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  
  <body>
    hello ${sessionScope.user.username } <br>
    <a href="/addProd.jsp">添加商品</a>
    <a href="/SaleListServlet">销售榜单下载</a>
  	<a href="/LogoutServlet">注销</a>
  </body>
</html>
