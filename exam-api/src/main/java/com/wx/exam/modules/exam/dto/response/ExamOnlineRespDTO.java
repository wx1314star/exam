package com.wx.exam.modules.exam.dto.response;

import com.wx.exam.modules.exam.dto.ExamDTO;
import io.swagger.annotations.ApiModel;
import lombok.Data;

/**
* <p>
* 考试分页响应类
* </p>
*
* @author wx
* @date2020-07-25 16:18
*/
@Data
@ApiModel(value="在线考试分页响应类", description="在线考试分页响应类")
public class ExamOnlineRespDTO extends ExamDTO {

    private static final long serialVersionUID = 1L;


}
