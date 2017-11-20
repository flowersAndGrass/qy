package qy;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.etc.qy.entity.TourNotes;
import com.etc.qy.service.TourNoteService;
import com.etc.qy.serviceImp.TourNoteServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})
public class TourNoteServiceTest {

	@Resource
	private TourNoteService tns;
	@Test
	public void test(){
		List<TourNotes> list =  tns.selectBytournoteName("²â");
		System.out.println(list.get(0));
	}
}
