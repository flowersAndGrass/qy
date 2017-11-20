package qy;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.etc.qy.dao.view_scenic_avaluateMapper;
import com.etc.qy.entity.view_scenic_avaluate;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:mybatis-config.xml"})
public class view_scenic_avaluateTest {

	@Resource
	private view_scenic_avaluateMapper vsam;
	@Test
	public void test(){
		List<view_scenic_avaluate> lsit = vsam.selectByhot();
for (view_scenic_avaluate view_scenic_avaluate : lsit) {
	System.out.println(view_scenic_avaluate);
}
	}
}
