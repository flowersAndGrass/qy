package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.ScenicPictureMapper;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.service.ScenicPictureService;

/**
 * @author Administrator游晓娟
 *
 */
@Service
public class ScenicPictureServiceImp implements ScenicPictureService{
	
	@Resource
	private ScenicPictureMapper spm;
	
	/**
	 * 根据景点id查图片
	 */
	public List<ScenicPicture> selectByScenicId(int scenicId) {
		// TODO Auto-generated method stub
		return spm.selectByScenicId(scenicId);
	}

}
