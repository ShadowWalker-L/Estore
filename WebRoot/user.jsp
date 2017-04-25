<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  
  <body>
    hello ${sessionScope.user.username } <br>
    <a href="/ProdListServlet">商品列表</a>
  	<a href="/cart.jsp">查看购物车</a>
  	<a href="/OrderListServlet">订单查询</a>
  	<a href="/LogoutServlet">注销</a>
  </body>
</html>
