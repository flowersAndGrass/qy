package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.AreaMapper;
import com.etc.qy.entity.Area;
import com.etc.qy.service.AreaService;

@Service
public class AreaServiceImpl implements AreaService {
@Resource
private AreaMapper am;

public List<Area> selectall() {
	// TODO Auto-generated method stub
	return am.selectall();
}


}
