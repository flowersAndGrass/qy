package qy;

import java.util.List;

import javax.annotation.Resource;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.City;
import com.etc.qy.service.CityService;
import com.etc.qy.service.ScenicService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})//ÒòÎªÊÇ
public class CityServiceTest {
	

	@Resource
	private CityService cs;
	
	@Test
public void testselectByareaid(){
	List<City> list = cs.selectByareaID(3);
	for (City city : list) {
		System.out.println(city);
	}
}
	@Test
	public void testselectBycityName(){
		City city = cs.selectBycityName("¾Æ");
		System.out.println(city);
	}
	



}
