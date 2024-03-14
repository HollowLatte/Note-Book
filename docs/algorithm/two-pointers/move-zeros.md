---
title: "[E] 移动零"
author:
category: TwoPointers
tag: TwoPointers
date: 2024-03-01
---

LeetCode地址：[移动零](https://leetcode.cn/problems/move-zeroes)

## 题目

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

示例 2:

输入: nums = [0]
输出: [0]

## 思路

1. “同时保持非零元素的相对顺序”：说明不能将该数组进行排序了，因为排序可能会打乱数组的相对顺序
2. “原地对数组进行操作”：说明就要用交换的方式来移动0了

## 题解

### 双指针（一次遍历）

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != 0) {
                int temp = nums[right];
                nums[right] = nums[left];
                nums[left++] = temp;
            }
        }
    }
}
```

### 移动非0再补0（两次遍历）

巧妙地利用指针标记非0元素个数的同时，指向最后一个非0元素的下标

```java
class Solution {
    public void moveZeroes(int[] nums) {
        // 第一次遍历的时候，只要是非0的统统都赋给nums[nonZero]，并且记录非0的个数，
        // 遍历完后，nonZero指针的下标指向的是最后一个非0元素的下标
        int nonZero = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[nonZero++] = num;
            }
        }
        // 非0元素统计完了，剩下的都是0了
        // 第二次遍历把末尾的元素都赋为0即可
        for (int i = nonZero; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
}
```