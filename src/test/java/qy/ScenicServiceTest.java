package qy;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.service.ScenicService;

public class ScenicServiceTest {
	ScenicMapper scenicMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicService scenicService = context.getBean(ScenicService.class);
		Scenic scenic = scenicService.selectByPrimaryKey(1);
		System.out.println(scenic);
	}
	@Test
	public void test1(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicService scenicService = context.getBean(ScenicService.class);
		List<Scenic> list = scenicService.selectByscenicName("Çø");
		System.out.println(list.get(0));
	}
}
