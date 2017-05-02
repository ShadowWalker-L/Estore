package com.itheima.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itheima.factory.BasicFactory;
import com.itheima.service.OrderService;

public class DelOrderServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		OrderService service = BasicFactory.getFactory().getService(OrderService.class);
		//1.获取订单id
		String id = request.getParameter("id");
		//2.调用Service中根据删除订单的方法
		service.delOrderByID(id);
		//3.回到订单列表页面
		response.getWriter().write("订单删除成功!!!");
		response.setHeader("Refresh", "3;url=/Estore/OrderListServlet");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
