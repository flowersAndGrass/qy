package qy;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.etc.qy.dao.TourNotesMapper;
import com.etc.qy.entity.TourNotes;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})
public class TourNotesDaoTest {

	@Resource
	private TourNotesMapper tnm;
	
	@Test
	public void test(){
		List<TourNotes> list = tnm.selectBytournoteName("²â");
		System.out.println(list.get(0));
	}
}
