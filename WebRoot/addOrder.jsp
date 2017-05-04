<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <%@include file="/head.html" %>
  <script  type="text/javascript" src="js/jquery-1.4.2.js"></script>
  </head>
  <body class="locale-en_US">
    <div id="notification_bar"></div>
    <%@include file="/header_checkout.html" %>
  	
  	
  	<div id="checkout_content" class="width_setter group" role="main">
    
        <div>
        <div id="cart">
        <div>
         <div class="clearfix"></div>
        <div>
        <div class="cart_title">
        <span>订单总计</span>
        <a id="cartLink" class="modalcart refreshonclose" href="#">
            <span>编辑</span>
        </a>
    </div>
    
    <table id="cart_summary" class="order_summary">
        <thead>
        <tr>
            <th>&nbsp;</th>
            <th align="left"><span>商品信息</span></th>
            <th><span>数量</span></th>
            <th> <span>价钱</span></th>
            <th> <span>总共节省</span></th>
            <th><span>全部</span></th>
        </tr>
        </thead>
        <tbody>
        <c:set var="money" value="0" />
		<c:forEach items="${sessionScope.cartmap}" var="entry">
			
        <tr id="productRow252">
             <td>
                 <img src="${pageContext.request.contextPath}/ImgServlet?imgurl=${entry.key.imgurls }" width="60" alt="${entry.key.name}+'_picture'"/>
            </td>
            <td align="left">
                <ul>
                <li>
                 <a  href="#" inline="text">
                  ${entry.key.name }
                </a></li>
                    <li><span>category :${entry.key.category }</span></li>
                    <li><span>State of Inventory:<br/>
                    <c:if test="${entry.value<=entry.key.pnum}">
                       <font color="blue">IN STOCK</font>
                    </c:if>
                    <c:if test="${entry.value>entry.key.pnum}">
                        <font color="red">OUT OF STOCK</font>
                    </c:if>
                    </span>
                    </li>
                </ul>
              
            </td>
            <td align="center">${entry.value }</td>
            <td align="center">${entry.key.price }RMB</td>
            <td align="center">---</td>
            <td align="center" class="value">${entry.key.price * entry.value }RMB</td>
             <c:set var="money" value="${money + entry.key.price * entry.value }"/>
        </tr>
        </c:forEach>
        </tbody>
    </table>
</div>

<div class="clearfix"></div>


 <div>
    <div class="cart_title">
        <span>联系信息</span>
        <a href="#">
            <span>编辑</span>
        </a>
    </div>
    <div class="clearfix">
        <div class="group order-info">
            <h3><span>电子邮箱地址</span></h3>
            <p>${user.email }</p>
        </div>
    </div>
</div>
 <div class="clearfix"></div>
                
                
                
                
            

            
                
                
  <div>
    <div class="cart_title">
        <span>账单信息</span>
    </div>
    <div class="clearfix"></div>

    <form method="post" id="billing_info" novalidate="novalidate" action="${pageContext.request.contextPath}/AddOrderServlet">
        <div id="billing_info_form">
            <input type="hidden" name="address.isoCountryAlpha2" value="US" />
            <div class="form30 margin20">
                <label for="phone"><span>支付方式</span></label>
                <input type="radio" id="address.phonePrimary" name="typex" class="field30 cloneable" checked="checked" style="width:50px"/>
                <span>在线支付</span>
            </div>
            <div class="clearfix"></div>
            <div class="form50">
                <label for="address1"><span>收货地址</span></label>
                
                <input type="text" class="field50 required cloneable" id="address.addressLine1" name="receiverinfo" value="" />
            </div>
            <div class="clearfix"></div>
            <div style="float:right;">
                <input type="submit" class="medium red" value="Save Billing" />
            </div>
        </div>
    <input type="hidden" name="csrfToken" value="4TRB-PZ59-UA3G-YBMW-2WSE-SV64-UTIQ-LHZP" /></form>
</div>
                
  	
  <%@include file="/footer.html" %>
  </body>
</html>
