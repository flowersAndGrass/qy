package qy;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.Ticket;
import com.etc.qy.service.ScenicService;
import com.etc.qy.service.TicketService;

public class TicketServiceTest {
	ScenicMapper scenicMapper =null;
	@Before
	public void before() {
		
	}
	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml","mybatis-config.xml");
		TicketService ticketService = context.getBean(TicketService.class);
		Ticket ticket = ticketService.selectByScenicId(1);
		System.out.println(ticket);
	}
}
