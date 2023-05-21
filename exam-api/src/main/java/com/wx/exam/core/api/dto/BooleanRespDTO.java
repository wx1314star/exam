package com.wx.exam.core.api.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * 主键通用响应类，用于添加后返回内容
 * </p>
 *
 * @author wx
 * 
 */
@Data
@ApiModel(value="主键通用响应类", description="主键通用响应类")
@AllArgsConstructor
@NoArgsConstructor
public class BooleanRespDTO extends BaseDTO {

    @ApiModelProperty(value = "主键ID", required=true)
    private Boolean effect;
}
