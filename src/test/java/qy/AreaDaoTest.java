package qy;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.etc.qy.dao.AreaMapper;
import com.etc.qy.entity.Area;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})
public class AreaDaoTest {
	
	@Resource
	private AreaMapper am;
	
	@Test
	public void testselectall(){
		List<Area> list = am.selectall();
	for (Area area : list) {
		System.out.println(area);
	}
	}

}
