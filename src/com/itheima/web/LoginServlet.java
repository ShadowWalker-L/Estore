package com.itheima.web;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.itheima.domain.User;
import com.itheima.factory.BasicFactory;
import com.itheima.service.UserService;
import com.itheima.util.MD5Utils;

public class LoginServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		UserService service = BasicFactory.getFactory().getService(UserService.class);
		String username = request.getParameter("username");
		String password = MD5Utils.md5(request.getParameter("password"));
		User user = service.getUserByNameAndPsw(username,password);
		if(user == null){
			request.setAttribute("msg", "用户名密码不正确!");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}
		if(user.getState() == 0){
			request.setAttribute("msg", "用户尚未激活,请到邮箱中进行激活!");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}
		
		request.getSession().setAttribute("user", user);
				
		if(user.getUsername().equals("admin")){
			response.sendRedirect(request.getContextPath()+"/admin.jsp");
			return;
		}
			
			
		response.sendRedirect(request.getContextPath()+"/user.jsp");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
