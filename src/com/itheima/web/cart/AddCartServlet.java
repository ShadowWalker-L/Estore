package com.itheima.web.cart;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itheima.domain.Product;
import com.itheima.factory.BasicFactory;
import com.itheima.service.ProdService;

public class AddCartServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ProdService service = BasicFactory.getFactory().getService(ProdService.class);
		String id = request.getParameter("id");
		Product prod = service.findProdById(id);
		if(prod==null){
			throw new RuntimeException("找不到该商品!");
		}else{
			Map<Product,Integer> cartmap = (Map<Product, Integer>) request.getSession().getAttribute("cartmap");
			cartmap.put(prod, cartmap.containsKey(prod)?cartmap.get(prod)+1 : 1);
			//calculate the items in cart
			Collection<Integer> values=cartmap.values();
			Integer itemCount=(Integer) request.getSession().getAttribute("itemCount");
			if (itemCount == null) {
				itemCount=0;
				for (int count : values) {
					itemCount+=count;
				}
				request.getSession().setAttribute("itemCount", itemCount);
			}else{
				request.getSession().setAttribute("itemCount", itemCount+1);
			}
		}
		response.sendRedirect(request.getContextPath()+"/cart.jsp");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
