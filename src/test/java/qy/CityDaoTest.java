package qy;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.CityMapper;
import com.etc.qy.entity.City;


public class CityDaoTest {
	CityMapper cityMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		CityMapper cityMapper = context.getBean(CityMapper.class);
		List<City> list =cityMapper.selectByAreaId(3) ;
		for (City city : list) {
			System.out.println(city);
		}
	}
	@Test
	public void testselectBycityName(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		CityMapper cityMapper = context.getBean(CityMapper.class);
		City city = cityMapper.selectBycityName("¾Æ");
		System.out.println(city);
	}
}
