<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
<%@include file="/head.html" %>
 <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
 <script  type="text/javascript" src="js/jquery-1.4.2.js"></script>
 <script type="text/javascript">

  		function changeNum(oldnum){
  			var $productId=document.getElementById("productId");
  			var $oldnum=document.getElementById("quantity");
  			var $nquantity=document.getElementById("quantity");
  		
  			if(!/^[1-9]\d*$/.test($nquantity.value)){
  				
  				alert("购买数量必须为正整数!");
  			
  				$nquantity.value=oldnum;
  				//console.log("购买数量必须是正数");
  				return false;
  			
  			}
  			alert("为什么不起作用!");
  			window.location.href="${pageContext.request.contextPath}/ChangeCartServlet?id="+$("#productId").val()+"&buynum="+$("#quantity").val();
  			return false;
  		
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
  <title>Cart</title>
  

  
  	<div id="cart" class="cart_modal" style="padding-left:0px;">
  	
  	
  	
  	 <c:if test="${empty sessionScope.cartmap}">
       <div id="cart_total" class="group"  style="margin-left:auto;
margin-right:auto;">
       <h2><a href="${pageContext.request.contextPath}/ProdListServlet">购物车空空如也,请先去挑点东西吧~~~</a></h2>
       </div>
     </c:if>
     
     
     
     
  	<c:if test="${not empty sessionScope.cartmap}">
     <%@include file="/cartProductsTable.html" %>
     <div id="cart_total" class="group">
            <h3><span>您当前的小计</span></h3>
            <div id="subtotal"><span>${money+entry.key.price*entry.value }RMB</span></div>
            
            <p><span>小计还不包括税费，运费和手续费</span>.</p>
            <div id="checkout">
                <a href="${pageContext.request.contextPath}/addOrder.jsp" target="_top" class="big-button red-button">
                    <span >查看</span>
                </a>
            </div>
            <p>
                <form action="#" complete_checkout="${false}" method="POST">
                    <input type="hidden" name="TRANSACTION_AMT" value="${cart.total}"/>
                    <input type="hidden" name="ORDER_ID" value="${cart.id}"/>
                    <input type="hidden" name="COMPLETE_CHECKOUT_ON_CALLBACK" value="false"/>
                    <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_xpressCheckout.gif" align="left" style="margin-right:7px;" alt="Submit Form" />
                </form>
                <div class="clearfix"></div>
                <a href="${pageContext.request.contextPath}/ProdListServlet" target="_top">&laquo; <span>Continue Shopping</span></a><br/>
                 <a href="${pageContext.request.contextPath}/ClearCartServlet" target="_top">&laquo; <span>clear the cart</span></a>
            </p>
        </div>
        </c:if>
       
        

    </div>
 

  	</div>
  	
      </div>
  	  <%@include file="/footer.html" %>
  </body>
</html>
