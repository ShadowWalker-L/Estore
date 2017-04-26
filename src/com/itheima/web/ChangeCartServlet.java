package com.itheima.web;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itheima.domain.Product;
import com.itheima.factory.BasicFactory;
import com.itheima.service.ProdService;

public class ChangeCartServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ProdService service = BasicFactory.getFactory().getService(ProdService.class);
		String id = request.getParameter("id");
		Product prod = service.findProdById(id);
		Map<Product,Integer> cartmap = (Map<Product, Integer>) request.getSession().getAttribute("cartmap");
		cartmap.put(prod, Integer.parseInt(request.getParameter("buynum")));
		System.out.println("changeCartServlet");
		response.sendRedirect(request.getContextPath()+"/cart.jsp");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
