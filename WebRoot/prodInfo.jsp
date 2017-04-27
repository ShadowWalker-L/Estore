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

     <%@include file="/nav0.html" %>
    
    

  
        <section id="left_column">
            <div id="product_content" class="product_container">
                <h2>${prod.name }</h2>
                <div id="maker">${prod.category }</div>
                <div id="price">
                    <div>${prod.price }RMB</div>
                </div>
 
                    <table>
                        <div id="description">${prod.description }.</div>
                        <div class="productActions3">
                            <div class="add_to_cart">
                               <a class="addToCart" href="${pageContext.request.contextPath}/AddCartServlet?id=${prod.id }">Buy Now</a>
                            </div>
                        </div>
                    </table>
                <p>
                    Share this Sauce:
                    <div class="addthis_toolbox addthis_default_style addthis_32x32_style">
                        <a class="addthis_button_preferred_1"></a>
                        <a class="addthis_button_preferred_2"></a>
                        <a class="addthis_button_preferred_3"></a>
                        <a class="addthis_button_preferred_4"></a>
                        <a class="addthis_button_compact"></a>
                        <a class="addthis_counter addthis_bubble_style"></a>
                    </div>
                    <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-5006d3e47d6ace5d"></script>
                </p>
            </div>
            
            <div id="product_main_image">
                <a class="jqzoom" id="zoom1" rel="gal1" href="#">
                    <img alt="" align="left" id="main_image" src="${pageContext.request.contextPath}/ImgServlet?imgurl=${prod.imgurl }" />
                </a>
            </div>
          
            <div class="clearfix"></div>
                <div id="customer-reviews-container">
                    <div>
                        <a class="account" href="#">Be the first to write a review!</a>
                    </div>
                </div>          
        </section>
        
        
  	
  	 <%@include file="/footer.html" %>
  </body>
</html>
