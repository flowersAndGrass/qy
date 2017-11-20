package qy;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.Scenic;

public class ScenicDaoTest {
	ScenicMapper scenicMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicMapper scenicMapper = context.getBean(ScenicMapper.class);
		Scenic scenic = scenicMapper.selectByPrimaryKey(1);
		System.out.println(scenic);
	}
	@Test
	public void testselectByscenicName(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicMapper scenicMapper = context.getBean(ScenicMapper.class);
		List<Scenic> list = scenicMapper.selectByscenicName("Çø");
		
			System.out.println(list.get(0));
		
		
	}
	@Test
	public void testselectByhot(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicMapper scenicMapper = context.getBean(ScenicMapper.class);
		List<Scenic> list = scenicMapper.selectbyhotscenic();
		for (Scenic scenic : list) {
			System.out.println(scenic);
		}
			
		
		
	}
	
	@Test
	public void testselectByrecomm(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicMapper scenicMapper = context.getBean(ScenicMapper.class);
		List<Scenic> list = scenicMapper.selectByrecomm();
		for (Scenic scenic : list) {
			System.out.println(scenic);
		}
			
		
		
	}
}
