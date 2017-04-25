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
		//1.��ȡ�û�������
		String username = request.getParameter("username");
		String password = MD5Utils.md5(request.getParameter("password"));
		//2.����Service�и����û�����������û��ķ���
		User user = service.getUserByNameAndPsw(username,password);
		if(user == null){
			request.setAttribute("msg", "�û������벻��ȷ!");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}
		//3.����û�����״̬
		if(user.getState() == 0){
			request.setAttribute("msg", "�û���δ����,�뵽�����н��м���!");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return;
		}
		
		request.getSession().setAttribute("user", user);
				
		if(user.getUsername().equals("admin")){
			response.sendRedirect("/admin.jsp");
			return;
		}
			
			
		response.sendRedirect("/user.jsp");
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
