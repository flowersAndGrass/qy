package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.ScenicPictureMapper;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.service.ScenicPictureService;

/**
 * @author Administrator������
 *
 */
@Service
public class ScenicPictureServiceImp implements ScenicPictureService{
	
	@Resource
	private ScenicPictureMapper spm;
	
	/**
	 * ���ݾ���id��ͼƬ
	 */
	public List<ScenicPicture> selectByScenicId(int scenicId) {
		// TODO Auto-generated method stub
		return spm.selectByScenicId(scenicId);
	}

}
