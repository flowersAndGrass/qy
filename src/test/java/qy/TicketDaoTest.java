package qy;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.dao.TicketMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.Ticket;

public class TicketDaoTest {
	ScenicMapper scenicMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		TicketMapper ticketMapper = context.getBean(TicketMapper.class);
		//根据景点id查票
		Ticket ticket = ticketMapper.selectByScenicId(1);
		System.out.println(ticket);
	}
}
