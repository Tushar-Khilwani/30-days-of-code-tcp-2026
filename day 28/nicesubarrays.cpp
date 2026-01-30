class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        vector<int> odd;
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            if (nums[i] % 2) odd.push_back(i);
        }

        if (odd.size() < k) return 0;

        int ans = 0;

        for (int i = 0; i + k - 1 < odd.size(); i++) {
            int leftGap = (i == 0) ? odd[i] : odd[i] - odd[i - 1] - 1;
            int rightGap = (i + k == odd.size()) ? 
                            n - odd[i + k - 1] - 1 :
                            odd[i + k] - odd[i + k - 1] - 1;

            ans += (leftGap + 1) * (rightGap + 1);
        }

        return ans;
    }
};
