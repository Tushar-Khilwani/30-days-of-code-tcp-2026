class Solution {
  public:
    vector<int> intersection(vector<int>& a, vector<int>& b) {
        vector<int> res;
        int i = 0, j = 0;
        int n = a.size(), m = b.size();

        while (i < n && j < m) {
            if (a[i] == b[j]) {
                if (res.empty() || res.back() != a[i])
                    res.push_back(a[i]);
                i++;
                j++;
            } 
            else if (a[i] < b[j]) {
                i++;
            } 
            else {
                j++;
            }
        }
        return res;
    }
};