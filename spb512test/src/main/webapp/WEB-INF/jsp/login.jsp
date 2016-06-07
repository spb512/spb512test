<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>上海市质量技术监督局协同办公系统</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<jsp:include page="system/share/common.jsp"></jsp:include>
<body class="login-layout">
	<div class="position-relative">
		<div class="main-container">
			<div class="main-content">
				<div class="row">
					<div class="col-sm-10 col-sm-offset-1">
						<div class="login-container">
							<div class="space-26"></div>
							<div class="position-relative">
								<div class="visible widget-box no-border">
									<div class="widget-header header-color-blue2 center">
										<h2 class="white">上海市质量技术监督局</h2>
										<h2 class="white">协同办公系统</h2>
									</div>
									<div class="widget-body">
										<div class="widget-main">
											<h4 class="header blue lighter bigger center">
												<i class="icon-coffee green"></i> 欢迎使用 ${message }
											</h4>
											<div class="space-6"></div>
											<form:form action="/spb512test/home/login" commandName="sUser" method="post">
												<input type="hidden" name="loginKey" value="inNetLogin" />
												<table>
													<tr>
														<th>用户名：</th>
														<td><span class="block input-icon input-icon-right">
																<!-- <input type="text" class="form-control" name="account" class="textbox1" /> -->
																<form:input path="userName"/> <form:errors path="userName" cssClass="error"/>
															    <i class="icon-user"></i>
														</span></td>
													</tr>
													<tr>
														<th>密     码：</th>
														<td><span class="block input-icon input-icon-right">
																<!-- <input type="password" class="form-control" name="password" class="textbox2"/> -->
																<form:password path="password"/> <form:errors path="password" cssClass="error" />
																<i class="icon-lock" ></i>
														</span></td>
													</tr>
												</table>
												<div class="space"></div>
												<div class="center">
													<input type="submit" value="登&nbsp;录" onclick="" class="width-35 btn btn-sm btn-danger">
												</div>
												<div class="space-4"></div>
											</form:form>
										</div>
									</div>
									<!-- /widget-body -->
								</div>
								<!-- /login-box -->
							</div>
							<!-- /position-relative -->
						</div>
					</div>
					<!-- /.col -->
				</div>
				<!-- /.row -->
			</div>
		</div>
		<!-- /.main-container -->
	</div>
</body>
</html>
