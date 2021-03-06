import { Injectable } from '@angular/core';
import { PageService, Page } from '@angular-cms/core';
import { map } from 'rxjs/operators';

import { TreeService } from '../shared/tree/tree-service';
import { TreeNode } from '../shared/tree/tree-node';

@Injectable()
export class PageTreeService implements TreeService {

    constructor(private pageService: PageService) { }

    getNode(nodeId: string): any {
        return this.pageService.getPageContent(nodeId).pipe(map(x => new TreeNode({
            id: x._id,
            name: x.name,
            hasChildren: x.hasChildren,
            parentId: x.parentId,
            parentPath: x.parentPath
        })));
    }

    loadChildren(parentNodeId: string): any {
        return this.pageService.getChildren(parentNodeId).pipe(map((res: Page[]) => {
            return res.map(x => new TreeNode({
                id: x._id,
                name: x.name,
                hasChildren: x.hasChildren,
                parentId: x.parentId,
                parentPath: x.parentPath
            }));
        }));
    }
}