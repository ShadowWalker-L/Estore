package com.itheima.web.account;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itheima.domain.User;
import com.itheima.factory.BasicFactory;
import com.itheima.service.UserService;

public class UserListServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		UserService service = BasicFactory.getFactory().getService(UserService.class);
		
		List<User> list = service.findAllUser();
		request.setAttribute("list", list);
		request.getRequestDispatcher("/admin/userList.jsp").forward(request, response);
	}


	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
