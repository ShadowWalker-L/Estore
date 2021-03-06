<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
     <%@include file="/head.html" %>
  </head>
  <body>
   <%@include file="/header.html" %>
   <div id="content" class="width_setter group" role="main">
    <%@include file="/nav1.html" %>
    <div class="manage-account-container clearfix">
   

  	<table width="100%" style="text-align: center;" >
  	<c:forEach items="${requestScope.list}" var="prod">
  		<tr>
  			<td width="20%"><a href="${pageContext.request.contextPath}/ProdChangeServlet?id=${prod.id }">
  			<img src="${pageContext.request.contextPath}/ImgServlet?imgurl=${prod.imgurls }" style="cursor: pointer;"/></a></td>
  			<td width="40%">
  				${prod.name }<br>
  				${prod.price }<br>
  				${prod.category }<br>
  			</td>
  			<td width="20%">
  				<c:if test="${prod.pnum>0}">
  					<font color="blue">存量:${prod.pnum }</font>
  				</c:if>
  				<c:if test="${prod.pnum<=0}">
  					<font color="red">缺货</font>
  				</c:if>
  			</td>
  			
  			<td width="20%">
  				<a href="${pageContext.request.contextPath}/DelProdServlet?id=${prod.id }">删除</a>
  			</td>
  			
  		</tr>
		<tr>
			<td colspan="3"><hr></td>
		</tr>
  	</c:forEach>
  	</table>
  	</div>
  	</div>
  	
  <%@include file="/footer.html" %>
  </body>
</html>
