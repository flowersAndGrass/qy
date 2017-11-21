package qy;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.dao.ScenicPictureMapper;
import com.etc.qy.dao.TourNotesMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.entity.TourNotes;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})
public class SenicpictureDaoTest {

	@Resource
	private ScenicPictureMapper spm;
	
	@Test
	public void test(){
		List<ScenicPicture> list = spm.selectByScenicId(1);
		System.out.println(list.get(0));
	}
}
