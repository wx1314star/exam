package com.wx.exam.modules.repo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.wx.exam.core.api.ApiRest;
import com.wx.exam.core.api.controller.BaseController;
import com.wx.exam.core.api.dto.BaseIdReqDTO;
import com.wx.exam.core.api.dto.BaseIdsReqDTO;
import com.wx.exam.core.api.dto.PagingReqDTO;
import com.wx.exam.core.utils.BeanMapper;
import com.wx.exam.modules.repo.dto.RepoDTO;
import com.wx.exam.modules.qu.dto.request.QuRepoBatchReqDTO;
import com.wx.exam.modules.repo.dto.response.RepoRespDTO;
import com.wx.exam.modules.repo.entity.Repo;
import com.wx.exam.modules.qu.service.QuRepoService;
import com.wx.exam.modules.repo.service.RepoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
* <p>
* 题库控制器
* </p>
*
* @author wx
* @date2020-05-25 13:25
*/
@Api(tags={"题库"})
@RestController
@RequestMapping("/exam/api/repo")
public class RepoController extends BaseController {

    @Autowired
    private RepoService baseService;

    @Autowired
    private QuRepoService quRepoService;

    /**
    * 添加或修改
    * @param reqDTO
    * @return
    */
    @ApiOperation(value = "添加或修改")
    @RequestMapping(value = "/save", method = { RequestMethod.POST})
    public ApiRest save(@RequestBody RepoDTO reqDTO) {
        baseService.save(reqDTO);
        return super.success();
    }

    /**
    * 批量删除
    * @param reqDTO
    * @return
    */
    @ApiOperation(value = "批量删除")
    @RequestMapping(value = "/delete", method = { RequestMethod.POST})
    public ApiRest edit(@RequestBody BaseIdsReqDTO reqDTO) {
        //根据ID删除
        baseService.removeByIds(reqDTO.getIds());
        return super.success();
    }

    /**
    * 查找详情
    * @param reqDTO
    * @return
    */
    @ApiOperation(value = "查找详情")
    @RequestMapping(value = "/detail", method = { RequestMethod.POST})
    public ApiRest<RepoDTO> find(@RequestBody BaseIdReqDTO reqDTO) {
        Repo entity = baseService.getById(reqDTO.getId());
        RepoDTO dto = new RepoDTO();
        BeanUtils.copyProperties(entity, dto);
        return super.success(dto);
    }

    /**
    * 分页查找
    * @param reqDTO
    * @return
    */
    @ApiOperation(value = "分页查找")
    @RequestMapping(value = "/paging", method = { RequestMethod.POST})
    public ApiRest<IPage<RepoRespDTO>> paging(@RequestBody PagingReqDTO<RepoDTO> reqDTO) {

        //分页查询并转换
        IPage<RepoRespDTO> page = baseService.paging(reqDTO);

        return super.success(page);
    }

    /**
     * 批量操作
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "批量操作", notes = "批量加入或从题库移除")
    @RequestMapping(value = "/batch-action", method = { RequestMethod.POST})
    public ApiRest paging(@RequestBody QuRepoBatchReqDTO reqDTO) {

        //分页查询并转换
        quRepoService.batchAction(reqDTO);
        return super.success();
    }

    /**
     * 查找列表，每次最多返回200条数据
     * @param reqDTO
     * @return
     */
    @ApiOperation(value = "查找列表")
    @RequestMapping(value = "/list", method = { RequestMethod.POST})
    public ApiRest<List<RepoDTO>> list(@RequestBody RepoDTO reqDTO) {

        //分页查询并转换
        QueryWrapper<Repo> wrapper = new QueryWrapper<>();

        //转换并返回
        List<Repo> list = baseService.list(wrapper);

        //转换数据
        List<RepoDTO> dtoList = BeanMapper.mapList(list, RepoDTO.class);

        return super.success(dtoList);
    }
}
