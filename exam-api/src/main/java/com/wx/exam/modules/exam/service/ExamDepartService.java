package com.wx.exam.modules.exam.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.wx.exam.modules.exam.entity.ExamDepart;

import java.util.List;

/**
* <p>
* 考试部门业务类
* </p>
*
* @author wx
* @date2020-09-03 17:24
*/
public interface ExamDepartService extends IService<ExamDepart> {

    /**
     * 保存全部
     * @param examId
     * @param departs
     */
    void saveAll(String examId, List<String> departs);


    /**
     * 根据考试查找对应的部门
     * @param examId
     * @return
     */
    List<String> listByExam(String examId);
}
