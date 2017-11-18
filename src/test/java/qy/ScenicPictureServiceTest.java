package qy;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.service.ScenicPictureService;
import com.etc.qy.service.ScenicService;

public class ScenicPictureServiceTest {
	ScenicMapper scenicMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		ScenicPictureService scenicPictureService = context.getBean(ScenicPictureService.class);
		List<ScenicPicture>list =  scenicPictureService.selectByScenicId(1);
		for (ScenicPicture scenicPicture : list) {
			System.out.println(scenicPicture);
		}
	}
}
