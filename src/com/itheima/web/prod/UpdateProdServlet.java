package com.itheima.web.prod;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itheima.domain.Product;
import com.itheima.factory.BasicFactory;
import com.itheima.service.ProdService;

public class UpdateProdServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ProdService service = BasicFactory.getFactory().getService(ProdService.class);
		//1.获取要查询的商品id
		String product_id = request.getParameter("id");
		double price =  Double.parseDouble(request.getParameter("price"));
		int pnum = Integer.parseInt(request.getParameter("pnum"));
		
		//2.调用Service中的方法
		Product prod = service.findProdById(product_id);
		
		//3.修改成功，跳转页面
		if(prod==null){
			throw new RuntimeException("找不到该商品!!!");
		}else{
			service.changeProd(product_id, price, pnum);
			response.getWriter().write("修改商品成功!3秒回到主页..");
			response.setHeader("Refresh", "3;url=/Estore/admin.jsp");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
